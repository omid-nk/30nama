import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // login
  const login = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    setUser(data.user);
    setLoading(false);
  };

  // logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const isPremium = user?.app_metadata?.role === "premium";

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isPremium }}>
      {children}
    </AuthContext.Provider>
  );
}
