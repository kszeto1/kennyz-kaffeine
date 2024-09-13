export default function Footer() {
  const footerLinks = [
    {
      label: "Shop",
      links: [
        "Coffee",
        "Tea",
        "Pastries",
        "Merch",
        "Subscriptions",
        "Gift Cards",
        "Wholesale",
      ],
    },
    {
      label: "About",
      links: [
        "News",
        "Careers",
        "Our Leadership",
        "Sustainability",
        "Store Menu",
        "Terms of Service",
        "Privacy Policy",
        "Customer Service",
      ],
    },
    {
      label: "Contact",
      links: ["Kennyz Kaffeine", "San Francisco, CA", "kenny.szeto1@gmail.com"],
    },
  ];

  return (
    <footer className="flex flex-row p-6 justify-evenly">
      {footerLinks.map((footerLink) => (
        <div key={footerLink.label}>
          <h3 className="text-lg font-bold leading-5">{footerLink.label}</h3>
          <ul className="flex flex-col">
            {footerLink.links.map((link) => (
              <li key={link}>
                {link === 'kenny.szeto1@gmail.com' ? <a href={'mailto:' + link}>{link}</a> : <a href={link}>{link}</a>}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <a
        href="https://www.flaticon.com/free-icons/black-coffee"
        title="black coffee icons"
      >
        Black coffee icons created by gruffystudio - Flaticon
      </a>
    </footer>
  );
}
