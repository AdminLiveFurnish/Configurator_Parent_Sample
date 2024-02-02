import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./components/Loader/Loader";
export const CONFIGURATOR_VIEWER = "/configurator/:modelId";
export const MODEL_VIEWER = "/modelviewer/:modelId";
export const CONFIGURATOR_VIEWER_SOFA = "/configurator/1";
export const CONFIGURATOR_VIEWER_BED = "/configurator/2";
const ConfiguratorViewerBed = lazy(() =>
  import("./pages/ConfiguratorViewerBed")
);
const ConfiguratorViewerSofa = lazy(() =>
  import("./pages/ConfiguratorViewerSofa")
);
const ModelViewer = lazy(() => import("./pages/ModelViewer"));

const routeMapFunc = (
  { exact = true, path, Component, componentProps, routes },
  idx
) => {
  return (
    <Route
      path={path}
      exact={exact}
      element={<Component {...componentProps} />}
      key={idx}
    >
      {routes?.map(routeMapFunc)}
    </Route>
  );
};

export const routes = [
  {
    path: CONFIGURATOR_VIEWER_SOFA,
    Component: ConfiguratorViewerSofa,
    key: "configurator1",
  },
  {
    path: CONFIGURATOR_VIEWER_BED,
    Component: ConfiguratorViewerBed,
    key: "configurato2",
  },
  // { path: MODEL_VIEWER, Component: ModelViewer, key: "modelViewer" },
  { path: "/", Component: ConfiguratorViewerSofa, key: "home" },
  { path: "/*", Component: ConfiguratorViewerSofa, key: "home" },
];

export const Routing = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <Loader
            zIndex={1000}
            loading={true}
            className="bg-white"
            position="fixed"
          />
        }
      >
        <Routes>{routes.map(routeMapFunc)}</Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
