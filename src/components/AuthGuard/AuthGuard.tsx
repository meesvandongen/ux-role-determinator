import { useAuthenticationStatus } from "@nhost/react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
  loadingFallback?: React.ReactNode;
  redirectPath?: string;
}

export function AuthGuard({
  loadingFallback = <div>Loading...</div>,
  redirectPath = "/login",
  children,
}: AuthGuardProps): JSX.Element {
  const { isAuthenticated, isLoading, isError } = useAuthenticationStatus();

  if (isLoading) {
    return <>{loadingFallback}</>;
  }

  if (isError || !isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
}
