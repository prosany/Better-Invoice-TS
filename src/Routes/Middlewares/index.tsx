import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

interface IProps {
  exact?: boolean;
  path: string;
  component: any;
  layout: React.ComponentType<any>;
  isPrivate?: boolean;
  rest?: any;
}

const ProtectedRoutes: React.FC<IProps> = ({
  component: Component,
  layout: Layout,
  isPrivate,
  ...rest
}) => {
  const { token } = useSelector((state: any) => state.storeLoginReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate && !token) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default ProtectedRoutes;
