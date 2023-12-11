import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Loader from './components/Loader/Loader';
// export const CONFIGURATOR_VIEWER = "/configurator/:modelId";
export const CONFIGURATOR_VIEWER_INVERTED = "/configurator/1";
export const CONFIGURATOR_VIEWER_QUAD = "/configurator/2";
export const CONFIGURATOR_VIEWER_OCTO = "/configurator/3";
export const MODEL_VIEWER = "/modelviewer/:modelId";
export const MODEL_VIEWER_INVERTED = "/modelviewer/1";
export const MODEL_VIEWER_QUAD = "/modelviewer/2";
export const MODEL_VIEWER_OCTO = "/modelviewer/3";

const HomePage = lazy(() => import("./pages/HomePage"));
// const ConfiguratorViewer = lazy(() => import("./pages/ConfiguratorViewer"));
const ConfiguratorViewerInverted = lazy(() => import("./pages/ConfiguratorViewerInverted"));
const ConfiguratorViewerQuad = lazy(() => import("./pages/ConfiguratorViewerQuad"));
const ConfiguratorViewerOcto = lazy(() => import("./pages/ConfiguratorViewerOcto"));
// const ModelViewer = lazy(() => import("./pages/ModelViewer"));
const ModelViewerInverted = lazy(() => import("./pages/ModelViewerInverted"));
const ModelViewerQuad = lazy(() => import("./pages/ModelViewerQuad"));
const ModelViewerOcta = lazy(() => import("./pages/ModelViewerOcta"));

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
  // { path: CONFIGURATOR_VIEWER, Component: ConfiguratorViewer, key: "configurator" },
  { path: CONFIGURATOR_VIEWER_INVERTED, Component: ConfiguratorViewerInverted, key: "configurator1" },
  { path: CONFIGURATOR_VIEWER_QUAD, Component: ConfiguratorViewerQuad, key: "configurato2" },
  { path: CONFIGURATOR_VIEWER_OCTO, Component: ConfiguratorViewerOcto, key: "configurator3" },
  // { path: MODEL_VIEWER, Component: ModelViewer, key: "modelViewer" },
  { path: MODEL_VIEWER_INVERTED, Component: ModelViewerInverted, key: "modelViewer1" },
  { path: MODEL_VIEWER_QUAD, Component: ModelViewerQuad, key: "modelViewe2" },
  { path: MODEL_VIEWER_OCTO, Component: ModelViewerOcta, key: "modelViewe3" },
  { path: '/', Component: HomePage, key: 'home'},
  { path: '/*', Component: HomePage, key: 'home'}
];

export const Routing = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader zIndex={1000} loading={true} className="bg-white" position="fixed" />}>
        <Routes>{routes.map(routeMapFunc)}</Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
