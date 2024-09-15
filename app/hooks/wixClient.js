// app/hooks/wixClient.js

import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

export const wixClient = async ()=>{
  const client = createClient({
    modules: {items},
    auth: OAuthStrategy({clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID}),
  })
  const tokens = await client.auth.generateVisitorTokens();
  client.auth.setTokens(tokens);
  return client;
}