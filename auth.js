import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "801748148316-9dkco504uv7tjlh078dmqmbqh411rfbv.apps.googleusercontent.com",
            clientSecret: "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AUTH_SECRET=b310c60e5f230b7ac5386932507b963d74d35dab15367a09fcb513f22fbac1a2",
        })
    ],
});
