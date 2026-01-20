import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RosterPage from "@/pages/Roster";
import MatchesPage from "@/pages/Matches";
// Shop disabled: route and page kept as comment for future re-enable
// import ShopPage from "@/pages/Shop";
import AboutPage from "@/pages/About";
import HighlightsPage from "@/pages/Highlights";
import ContactPage from "@/pages/Contact";
import PrivacyPage from "@/pages/Privacy";
import TermsPage from "@/pages/Terms";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/roster" component={RosterPage} />
  <Route path="/matches" component={MatchesPage} />
  {/* Shop route disabled */}
  {/* <Route path="/shop" component={ShopPage} /> */}
      <Route path="/about" component={AboutPage} />
      <Route path="/highlights" component={HighlightsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
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
