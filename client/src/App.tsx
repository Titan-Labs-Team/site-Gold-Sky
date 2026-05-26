// Gold Sky — App Router
// Design: Parisian Atelier Minimalismo Quente + GSAP Animations
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import NotFound from "@/pages/NotFound"
import { Route, Switch } from "wouter"
import ErrorBoundary from "./components/ErrorBoundary"
import { ThemeProvider } from "./contexts/ThemeContext"
import { StoreProvider } from "./contexts/StoreContext"
import { PageTransition } from "./components/PageTransition"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import About from "./pages/About"
import Contact from "./pages/Contact"

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/produtos">{() => <Products />}</Route>
        <Route path="/categoria/:slug">{(params) => <Products categorySlug={params.slug} />}</Route>
        <Route path="/produto/:slug" component={ProductDetail} />
        <Route path="/carrinho" component={Cart} />
        <Route path="/favoritos" component={Wishlist} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <StoreProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </StoreProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
