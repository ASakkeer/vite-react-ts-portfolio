// Backwards-compatible alias that now maps the legacy Index route to the dedicated home page.
import type { FC } from "react";
import HomePage from "./Home/HomePage";

const Index: FC = () => {
  return <HomePage />;
};

export default Index;
