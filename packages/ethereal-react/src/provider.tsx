import type { Web3Provider, JsonRpcProvider } from "@ethersproject/providers";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { EtherealContextValue, createEthereal } from "./Ethereal";

export type EtherealProvider = Web3Provider | JsonRpcProvider;

export const ProvidersContext = createContext<
  Record<string, EtherealContextValue>
>({});

interface ProviderProps {
  name?: string;
  provider: EtherealProvider;
  children: ReactNode;
}

export function EtherealProvider(props: ProviderProps) {
  const { name = "default", provider, children } = props;
  const providers = useContext(ProvidersContext);
  const newContext = useMemo(
    () => ({
      ...providers,
      [name]: createEthereal(provider),
    }),
    [providers, provider, name]
  );

  return (
    <ProvidersContext.Provider value={newContext}>
      {children}
    </ProvidersContext.Provider>
  );
}

export function useEthereal(name: string = "default") {
  const providers = useContext(ProvidersContext);

  if (!Object.keys(providers).length) {
    throw new Error("No providers were found in the current React tree.");
  }

  if (!providers.hasOwnProperty(name)) {
    throw new Error(
      `Provider with name "${name}" not found in the current React tree. Only found providers with names: ${Object.keys(
        providers
      ).join(", ")}`
    );
  }

  return providers[name];
}
