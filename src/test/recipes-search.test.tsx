/**
 * Tests for the Recipes page search / filter behaviour.
 *
 * Covers:
 *   1. Typing a nonsense query shows the no-results empty state.
 *   2. Clearing the search restores the full recipe grid.
 *   3. Category + search filters compose correctly
 *      (Pasta category + "mascarpone" query → 0 results).
 */

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// ---------------------------------------------------------------------------
// Mocks – declared BEFORE any import that transitively loads framer-motion
// ---------------------------------------------------------------------------

vi.mock('framer-motion', () => {
  // Simple passthrough wrapper for each element type
  const passthrough =
    (Tag: string) =>
    // eslint-disable-next-line react/display-name
    React.forwardRef(function MotionEl(
      {
        children,
        // Strip all framer-motion-specific props so React doesn't warn
        initial: _i,
        animate: _a,
        exit: _e,
        transition: _t,
        whileHover: _wh,
        whileTap: _wt,
        whileInView: _wiv,
        viewport: _vp,
        layout: _l,
        layoutId: _lid,
        variants: _v,
        custom: _c,
        onAnimationComplete: _oac,
        ...domProps
      }: any,
      ref: any,
    ) {
      return React.createElement(Tag, { ...domProps, ref }, children);
    });

  return {
    motion: {
      div: passthrough('div'),
      article: passthrough('article'),
      button: passthrough('button'),
      img: passthrough('img'),
      span: passthrough('span'),
      p: passthrough('p'),
      h1: passthrough('h1'),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    LayoutGroup: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
    useInView: () => true,
  };
});

vi.mock('wouter', () => ({
  Link: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [k: string]: unknown;
  }) => React.createElement('a', { href, ...rest }, children),
}));

vi.mock('@/components/Header', () => ({
  Header: () => React.createElement('header', null, 'Header'),
}));

vi.mock('@/components/Footer', () => ({
  Footer: () => React.createElement('footer', null, 'Footer'),
}));

// ---------------------------------------------------------------------------
// Component under test
// ---------------------------------------------------------------------------
import Recipes from '@/pages/recipes';
import { recipes } from '@/data/recipes';

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------
describe('Recipes page — search & filter', () => {
  it('shows the no-results empty state for a query that matches nothing', () => {
    render(<Recipes />);
    const input = screen.getByTestId('input-search');

    act(() => {
      fireEvent.change(input, { target: { value: 'zzzzz' } });
    });

    expect(screen.getByTestId('no-results')).toBeInTheDocument();
    for (const recipe of recipes) {
      expect(
        screen.queryByTestId(`card-recipe-${recipe.slug}`),
      ).not.toBeInTheDocument();
    }
  });

  it('restores the full recipe grid after clearing the search', () => {
    render(<Recipes />);
    const input = screen.getByTestId('input-search');

    act(() => {
      fireEvent.change(input, { target: { value: 'zzzzz' } });
    });
    expect(screen.getByTestId('no-results')).toBeInTheDocument();

    // Click the ✕ clear button
    act(() => {
      fireEvent.click(screen.getByTestId('button-clear-search'));
    });

    expect(screen.queryByTestId('no-results')).not.toBeInTheDocument();
    for (const recipe of recipes) {
      expect(
        screen.getByTestId(`card-recipe-${recipe.slug}`),
      ).toBeInTheDocument();
    }
  });

  it('returns no results when Pasta category is active and query matches only a non-pasta recipe', () => {
    render(<Recipes />);

    // Select the Pasta category filter
    act(() => {
      fireEvent.click(screen.getByTestId('button-filter-pasta'));
    });

    // "mascarpone" appears only in Tiramisù della Nonna (category: dolci)
    act(() => {
      fireEvent.change(screen.getByTestId('input-search'), {
        target: { value: 'mascarpone' },
      });
    });

    expect(screen.getByTestId('no-results')).toBeInTheDocument();
  });
});
