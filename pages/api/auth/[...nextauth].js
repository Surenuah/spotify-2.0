import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import {LOGIN_URL} from "../../../lib/spotify";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL,
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000,
                };
            }

            if (Date.now() < token.accessTokenExpires) {
                console.log('Existing token is valid!!!');
                return token;
            }

            console.log('Access token has expired, refreshing....');
            return await refreshAccessToken(token);
        },
    },
});