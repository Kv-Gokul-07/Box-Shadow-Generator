import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import AppError from "../components/error";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";

const BoxShadow = lazy(() => import(`../pages/BoxShadow/BoxShadow`));
const TextShadow = lazy(() => import(`../pages/TextShadow/TextShadow`));
const CSSCursor = lazy(() => import(`../pages/CssCursor/CssCursor`));
const BorderRadius = lazy(() => import(`../pages/BorderRadius/BorderRadius`));
const Border = lazy(() => import(`../pages/Border/Border`));
const Transform = lazy(() => import(`../pages/Transform/Transform`));
const LinearGradient = lazy(() =>
  import(`../pages/LinearGradient/LinearGradient`)
);
const ColorOptions = lazy(() => import(`../pages/ColorOptions/ColorOptions`));

function AppRoutes() {
  const errorHandler = (error, info) => {
    console.log("Error --> ", error.message);
    console.log("Stack --> ", info.componentStack);
  };

  return (
    <Suspense fallback={<ProgressBar />}>
      <ErrorBoundary FallbackComponent={AppError} onError={errorHandler}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Border />} />
            <Route exact path="/box-shadow" element={<BoxShadow />} />
            <Route exact path="/text-Shadow" element={<TextShadow />} />
            <Route exact path="/css-cursor" element={<CSSCursor />} />
            <Route exact path="/border-radius" element={<BorderRadius />} />
            <Route exact path="/transform" element={<Transform />} />
            <Route exact path="/linear-gradient" element={<LinearGradient />} />
            <Route exact path="/color-options" element={<ColorOptions />} />
            <Route path="*" element={<div>Page not found  </div>}/>
          </Routes>
        </Router>
      </ErrorBoundary>
    </Suspense>
  );
}

export default AppRoutes;
