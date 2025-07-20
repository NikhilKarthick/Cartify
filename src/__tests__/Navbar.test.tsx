import { render, screen, fireEvent} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar, type NavbarProps } from "../components/Navbar";
import { ShoppingCart } from "lucide-react";

const renderNavbar = (props: NavbarProps) => {
  return render(<MemoryRouter><Navbar {...props} /></MemoryRouter>);
};

describe("Navbar Component", () => {
  const defaultNavItems: NavbarProps["navItems"] = [
    { label: "Home", href: "/home" },
    { label: "Discounts", href: "/discounts" },
    { label: "Events", href: "/events" },
    { label: "Disabled", href: "#", disabled: true },
  ];

  const defaultRightContent = (
    <form data-testid="search-form" onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-3">
      <input type="text" placeholder="Search" />
      <button type="button">Search</button>
      <button type="button">Login</button>
      <div className="relative">
        <button type="button" aria-label="Cart">
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>
        <span className="absolute -top-1 -right-1">3</span>
      </div>
    </form>
  );

  const props: NavbarProps = {
    logo: "MyStore",
    navItems: defaultNavItems,
    rightContent: defaultRightContent,
  };

  test("renders logo and nav items", () => {
    renderNavbar(props);
    expect(screen.getByText("MyStore")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Discounts")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Disabled")).toBeInTheDocument();
  });

  test("renders rightContent elements", () => {
    renderNavbar(props);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Cart")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument(); // cart badge
  });

  test("disabled nav item has correct attributes", () => {
    renderNavbar(props);
    const disabledLink = screen.getByText("Disabled");
    expect(disabledLink).toHaveAttribute("aria-disabled", "true");
    expect(disabledLink).toHaveClass("cursor-not-allowed");
  });
  test("renders in vertical mode (storybook)", () => {
    renderNavbar({ ...props, vertical: true });
    expect(screen.getByText("Discounts")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  test("dropdown is rendered correctly when included", () => {
    const navWithDropdown: NavbarProps["navItems"] = [
      {
        label: "Services",
        href: "/services",
        dropdownItems: [
          { label: "Design", href: "/services/design" },
          { label: "Development", href: "/services/dev" },
        ],
      },
    ];
    renderNavbar({ ...props, navItems: navWithDropdown });
    fireEvent.mouseOver(screen.getByText("Services"));
    expect(screen.getByText("Design")).toBeInTheDocument();
    expect(screen.getByText("Development")).toBeInTheDocument();
  });

  test("renders login avatar when user is logged in", () => {
    const userInitials = "JD";
    const rightContentLoggedIn = (
      <form>
        <div
          className="w-8 h-8 flex items-center justify-center bg-gray-300 text-white rounded-full font-semibold"
          title="Account"
        >
          {userInitials}
        </div>
      </form>
    );
    renderNavbar({ ...props, rightContent: rightContentLoggedIn });
    expect(screen.getByText("JD")).toBeInTheDocument();
  });
});
