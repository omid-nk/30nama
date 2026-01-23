import useAuth from "../../hooks/useAuth";

export default function PremiumGuard({ children }) {
  const { isPremium } = useAuth();
  if (!isPremium) {
    return (
      <div className="mt-20 text-center">
        <h2>Upgrade to Premium</h2>
      </div>
    );
  }
  return children;
}
