import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { RoutingProvider } from "@/contexts/RoutingContext";
import { PortalContainerProvider } from "@/contexts/PortalContainerContext";

import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setPortalContainer} className="react-landing">
      <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <RoutingProvider>
          <PortalContainerProvider container={portalContainer}>
            <TooltipProvider>
              <Toaster />
              <Sonner />

              {/* PAS DE ROUTER */}
              <Index />
            </TooltipProvider>
          </PortalContainerProvider>
        </RoutingProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </div>
  );
};

export default App;
