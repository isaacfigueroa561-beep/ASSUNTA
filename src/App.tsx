import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/home';
import Recipes from '@/pages/recipes';
import RecipeDetail from '@/pages/recipe-detail';
import Product from '@/pages/product';
import About from '@/pages/about';
import Faq from '@/pages/faq';
import Contact from '@/pages/contact';
import Privacy from '@/pages/privacy';
import Terms from '@/pages/terms';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipes/:slug" component={RecipeDetail} />
      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
          <StickyMobileCTA />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
