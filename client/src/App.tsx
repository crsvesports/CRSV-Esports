import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RosterPage from "@/pages/Roster";
import MatchesPage from "@/pages/Matches";
import ShopPage from "@/pages/Shop";
import AboutPage from "@/pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/roster" component={RosterPage} />
      <Route path="/matches" component={MatchesPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
