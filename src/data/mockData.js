/**
 * mockData.js
 *
 * Local 2026-ready dataset.
 *
 * Why this exists:
 * - Makes the site work locally + on any static host without the Base44 backend.
 * - Keeps everything crawlable with stable, SEO-friendly URLs.
 *
 * IMPORTANT:
 * - Replace affiliate_url values with your real affiliate tracking links.
 * - Set VITE_SITE_URL in .env(.local) when you know your real domain.
 */

export const SITE = {
  name: "DetailerStack",
  tagline: "Software, tools & equipment for mobile car detailing (2026)",
  // Use your real domain when deployed.
  baseUrl: (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) || "https://example.com",
  defaultOgImage: "/og-default.png",
};

const aff = (slug) => `${SITE.baseUrl.replace(/\/$/, "")}/go/${slug}?utm_source=detailerstack&utm_medium=affiliate&utm_campaign=2026`;

export const categories = [
  {
    name: "Software & Business Tools",
    slug: "software-business-tools",
    description:
      "Scheduling, invoicing, CRM, payments, and accounting tools that keep a mobile detailing business organized and profitable in 2026.",
    icon: "BarChart3",
    sort_order: 1,
  },
  {
    name: "Detailing & Auto Software",
    slug: "detailing-auto-software",
    description:
      "Detailing-specific platforms for inspections, packages, upsells, and vehicle workflows — built for detailers, not generic jobs.",
    icon: "Car",
    sort_order: 2,
  },
  {
    name: "Marketing & Customer Acquisition",
    slug: "marketing-customer-acquisition",
    description:
      "Email, automation, landing pages, and CRM tools to help mobile detailers win more repeat customers and referrals in 2026.",
    icon: "Megaphone",
    sort_order: 3,
  },
  {
    name: "Equipment & Supplies",
    slug: "equipment-supplies",
    description:
      "Chemicals, pads, towels, and suppliers used by mobile detailers to deliver consistent results on every job.",
    icon: "Wrench",
    sort_order: 4,
  },
];

export const tools = [
  // --- Field Service / Ops ---
  {
    name: "Jobber",
    slug: "jobber",
    category_slug: "software-business-tools",
    short_description:
      "All-in-one field service platform for scheduling, invoicing, CRM, and client communication — a top pick for mobile detailers in 2026.",
    long_description:
      "## Jobber review (2026)\n\nJobber is a strong all-in-one system for mobile detailers who want **scheduling, invoicing, and a simple CRM** without a complicated setup.\n\n### Why detailers like it\n- Online booking and fast quote → invoice workflows\n- Automated reminders to reduce no-shows\n- Clean mobile experience when you're on the road\n\n### Who it's best for\nSolo operators and small teams that want a polished customer experience and reliable back-office basics.",
    affiliate_url: aff("jobber"),
    official_site_url: "https://getjobber.com",
    pricing_starts_at: "$29/mo",
    pricing_details:
      "Expect starter plans in the $20–$40/mo range, with higher tiers adding automation, reporting, and multi-user workflows.",
    rating: 4.7,
    best_for: "Solo and small teams who want scheduling + invoicing + CRM in one place.",
    features: ["Online booking", "Scheduling", "Quotes", "Invoicing", "Client CRM"],
    feature_tags: ["scheduling", "invoicing", "crm", "automation"],
    pros: ["Fast setup", "Great mobile UX", "Strong invoicing workflow"],
    cons: ["Not detailing-specific", "Costs rise as you add users"],
    faqs: [
      {
        question: "Is Jobber good for mobile detailing?",
        answer:
          "Yes. Jobber covers scheduling, invoicing, and client management well for service businesses — a great fit for mobile detailers who want an all-in-one system.",
      },
      {
        question: "Does Jobber handle online booking?",
        answer:
          "Yes. Many plans include online booking and appointment reminders.",
      },
    ],
    is_featured: true,
    sort_order: 1,
  },
  {
    name: "Housecall Pro",
    slug: "housecall-pro",
    category_slug: "software-business-tools",
    short_description:
      "Popular field service suite with scheduling, invoicing, payments, and automation — strong for teams and growing detail shops.",
    long_description:
      "## Housecall Pro review (2026)\n\nHousecall Pro is built for service businesses that want an operational hub: **dispatching, scheduling, invoicing, and payments** with automation layers.\n\n### Great for growth\nIf you're adding techs, routes, or multiple vans, Housecall Pro can keep operations consistent.",
    affiliate_url: aff("housecall-pro"),
    official_site_url: "https://www.housecallpro.com",
    pricing_starts_at: "$49/mo",
    pricing_details:
      "Starter pricing varies by promotions and tiers. Expect higher tiers if you need deeper automation and team features.",
    rating: 4.6,
    best_for: "Growing teams that need scheduling + payments + automation.",
    features: ["Scheduling", "Dispatch", "Invoicing", "Payments", "Automations"],
    feature_tags: ["scheduling", "invoicing", "payment", "automation", "crm"],
    pros: ["Solid automation", "Good for teams", "Payments + invoicing integrated"],
    cons: ["Can feel heavy for solo operators", "Feature access varies by tier"],
    faqs: [
      {
        question: "Is Housecall Pro better than Jobber?",
        answer:
          "It depends. Housecall Pro tends to shine for teams and automation-heavy workflows; Jobber often wins on simplicity and speed for solo operators.",
      },
    ],
    is_featured: true,
    sort_order: 2,
  },
  {
    name: "PocketSuite",
    slug: "pocketsuite",
    category_slug: "software-business-tools",
    short_description:
      "Lightweight scheduling + payments + messaging for solo operators. Great if you want something simpler than full field-service suites.",
    long_description:
      "## PocketSuite review (2026)\n\nPocketSuite is a streamlined option for solo mobile detailers who want **booking, payments, and client messaging** without a complex setup.",
    affiliate_url: aff("pocketsuite"),
    official_site_url: "https://www.pocketsuite.io",
    pricing_starts_at: "$19/mo",
    pricing_details:
      "Often positioned as an affordable solo-operator tool with upgrades for additional features.",
    rating: 4.4,
    best_for: "Solo operators who want simple scheduling + payments.",
    features: ["Scheduling", "Client messaging", "Payments", "Online booking"],
    feature_tags: ["scheduling", "payment", "crm"],
    pros: ["Simple UI", "Good for solo", "Fast setup"],
    cons: ["Less robust for teams", "Fewer advanced automations"],
    faqs: [],
    is_featured: false,
    sort_order: 3,
  },

  // --- Detailing-specific ---
  {
    name: "MobileTech RX",
    slug: "mobiletech-rx",
    category_slug: "detailing-auto-software",
    short_description:
      "Detailing-specific software with packages, inspections, and upsells — the industry standard for professional detailing workflows.",
    long_description:
      "## MobileTech RX review (2026)\n\nMobileTech RX is one of the most recognized detailing platforms for **package building, inspections, and upsells**.\n\nIf you want a system designed around vehicles and detailing services (not generic jobs), this is a top option.",
    affiliate_url: aff("mobiletech-rx"),
    official_site_url: "https://mobiletechrx.com",
    pricing_starts_at: "$29/mo",
    pricing_details:
      "Pricing depends on plan and team size. Many detailers justify the cost through higher average ticket size from inspections/upsells.",
    rating: 4.5,
    best_for: "Detailers who want detailing-native workflows (packages, inspections, upsells).",
    features: ["Detailing packages", "Vehicle inspections", "Upsells", "Invoices", "Client history"],
    feature_tags: ["detailing-specific", "crm", "invoicing", "automation"],
    pros: ["Built for detailing", "Great for upsells", "Professional inspection flow"],
    cons: ["Can be overkill for brand-new solo operators", "Learning curve"],
    faqs: [],
    is_featured: true,
    sort_order: 4,
  },

  // --- Payments / Accounting ---
  {
    name: "Square",
    slug: "square",
    category_slug: "software-business-tools",
    short_description:
      "Easy card payments, invoices, and POS — ideal for mobile detailers who want fast on-site checkout in 2026.",
    long_description:
      "## Square review (2026)\n\nSquare is a go-to for **card payments on the spot**, plus invoices and simple customer tracking.",
    affiliate_url: aff("square"),
    official_site_url: "https://squareup.com",
    pricing_starts_at: "Free + processing fees",
    pricing_details:
      "Most Square products have no monthly fee; you typically pay transaction processing fees and optional add-ons.",
    rating: 4.6,
    best_for: "Mobile payments + simple invoicing.",
    features: ["Card reader", "Invoices", "Payment links", "Basic customer directory"],
    feature_tags: ["payment", "invoicing"],
    pros: ["Fast setup", "Trusted brand", "Great on-site checkout"],
    cons: ["Fees can add up", "Limited advanced CRM"],
    faqs: [],
    is_featured: true,
    sort_order: 5,
  },
  {
    name: "Stripe",
    slug: "stripe",
    category_slug: "software-business-tools",
    short_description:
      "Developer-friendly payments for invoices, subscriptions, and checkout. Best if you're building custom workflows.",
    long_description:
      "## Stripe review (2026)\n\nStripe is powerful if you want **custom payment flows**, subscriptions, or deeper integrations with your website/app.",
    affiliate_url: aff("stripe"),
    official_site_url: "https://stripe.com",
    pricing_starts_at: "Processing fees",
    pricing_details:
      "Stripe generally charges per-transaction fees; exact pricing depends on your products and region.",
    rating: 4.5,
    best_for: "Custom checkout + automation built into your website.",
    features: ["Online checkout", "Invoices", "Subscriptions", "API integrations"],
    feature_tags: ["payment", "automation"],
    pros: ["Highly flexible", "Great docs", "Strong developer ecosystem"],
    cons: ["Not beginner-friendly", "Requires setup work"],
    faqs: [],
    is_featured: false,
    sort_order: 6,
  },
  {
    name: "QuickBooks Online",
    slug: "quickbooks-online",
    category_slug: "software-business-tools",
    short_description:
      "Accounting standard for small businesses: invoicing, expenses, mileage, and tax-ready reporting.",
    long_description:
      "## QuickBooks Online review (2026)\n\nIf you want clean books (and less stress at tax time), QuickBooks Online is a common pick for mobile detailers.",
    affiliate_url: aff("quickbooks-online"),

    pricing_starts_at: "$30/mo",
    pricing_details:
      "Plans vary by features (reporting, inventory, payroll add-ons). Many businesses start on lower tiers and upgrade as needed.",
    rating: 4.4,
    best_for: "Bookkeeping and tax-ready reporting.",
    features: ["Expense tracking", "Invoicing", "Reports", "Bank sync"],
    feature_tags: ["invoicing", "automation"],
    pros: ["Common accountant-friendly", "Great reporting", "Bank sync"],
    cons: ["Can get pricey", "UI can feel busy"],
    faqs: [],
    is_featured: false,
    sort_order: 7,
  },

  // --- Marketing / CRM ---
  {
    name: "HighLevel",
    slug: "highlevel",
    category_slug: "marketing-customer-acquisition",
    short_description:
      "All-in-one marketing platform: funnels, email/SMS automation, CRM, and pipelines — great for aggressive growth.",
    long_description:
      "## HighLevel review (2026)\n\nHighLevel bundles **funnels, automation, and CRM** into one platform. It's powerful if you're running ads, follow-ups, and want a real pipeline.",
    affiliate_url: aff("highlevel"),

    pricing_starts_at: "$97/mo",
    pricing_details:
      "Higher tiers add more sub-accounts, advanced features, and agency-style tools.",
    rating: 4.4,
    best_for: "Detailers who want automation + funnels + pipeline in one place.",
    features: ["CRM", "Funnels", "Email/SMS", "Automation", "Pipelines"],
    feature_tags: ["crm", "marketing", "automation", "email"],
    pros: ["Very powerful", "Strong automation", "Funnels + CRM together"],
    cons: ["Learning curve", "Can be overkill for simple needs"],
    faqs: [],
    is_featured: true,
    sort_order: 8,
  },
  {
    name: "Zoho CRM",
    slug: "zoho-crm",
    category_slug: "marketing-customer-acquisition",
    short_description:
      "Flexible CRM for tracking leads, pipelines, and customer history — a solid value option.",
    long_description:
      "## Zoho CRM review (2026)\n\nZoho CRM works well if you want a customizable CRM to track **leads → booked jobs → repeat customers**.",
    affiliate_url: aff("zoho-crm"),
    official_site_url: "https://www.zoho.com/crm/",
    pricing_starts_at: "$20/user/mo",
    pricing_details:
      "Zoho offers multiple tiers. Most small teams start on lower tiers and add features (automation, reporting) as they grow.",
    rating: 4.3,
    best_for: "A flexible CRM without agency-level pricing.",
    features: ["Lead tracking", "Pipelines", "Automations", "Reporting"],
    feature_tags: ["crm", "automation", "marketing"],
    pros: ["Customizable", "Good value", "Strong ecosystem"],
    cons: ["Setup takes time", "Some features gated by tier"],
    faqs: [],
    is_featured: false,
    sort_order: 9,
  },
  {
    name: "Mailchimp",
    slug: "mailchimp",
    category_slug: "marketing-customer-acquisition",
    short_description:
      "Beginner-friendly email marketing for newsletters, promos, and basic automations.",
    long_description:
      "## Mailchimp review (2026)\n\nMailchimp is a classic choice for email marketing. It's simple and widely supported, making it a solid starting point.",
    affiliate_url: aff("mailchimp"),
  
    pricing_starts_at: "Free / paid tiers",
    pricing_details:
      "Pricing varies by list size and features. Free tiers can work early; automations and advanced segmentation are typically paid.",
    rating: 4.2,
    best_for: "Email newsletters and simple promos.",
    features: ["Email campaigns", "Templates", "Basic automation", "Signup forms"],
    feature_tags: ["email", "marketing"],
    pros: ["Easy to start", "Lots of templates", "Widely known"],
    cons: ["Costs rise with list size", "Advanced automation limited"],
    faqs: [],
    is_featured: false,
    sort_order: 10,
  },
  {
    name: "ActiveCampaign",
    slug: "activecampaign",
    category_slug: "marketing-customer-acquisition",
    short_description:
      "Advanced email automation + segmentation + CRM-style features — strong for repeat-business systems.",
    long_description:
      "## ActiveCampaign review (2026)\n\nActiveCampaign is ideal if you care about **automated follow-ups**: service reminders, win-back sequences, review requests, and upsell campaigns.",
    affiliate_url: aff("activecampaign"),
    official_site_url: "https://www.activecampaign.com",
    pricing_starts_at: "$29/mo",
    pricing_details:
      "Pricing depends on contacts and features. It's often worth it if automation boosts repeat bookings.",
    rating: 4.5,
    best_for: "Email automation that drives repeat business.",
    features: ["Automations", "Segmentation", "Email", "Lead scoring"],
    feature_tags: ["email", "marketing", "automation", "crm"],
    pros: ["Best-in-class automations", "Great segmentation", "Scales well"],
    cons: ["More complex than Mailchimp", "Pricing grows with contacts"],
    faqs: [],
    is_featured: true,
    sort_order: 11,
  },

  // --- Design / Web ---
  {
    name: "Canva",
    slug: "canva",
    category_slug: "marketing-customer-acquisition",
    short_description:
      "Design tool for ads, flyers, social posts, and brand assets — perfect for fast marketing content.",
    long_description:
      "## Canva review (2026)\n\nCanva helps mobile detailers create professional visuals quickly: before/after posts, seasonal promos, and review graphics.",
    affiliate_url: aff("canva"),
    official_site_url: "https://www.canva.com",
    pricing_starts_at: "Free / Pro",
    pricing_details:
      "Free covers basics. Pro adds brand kits, premium templates, and collaboration.",
    rating: 4.8,
    best_for: "Fast, clean marketing designs.",
    features: ["Templates", "Brand kit", "Social scheduling", "Print exports"],
    feature_tags: ["marketing"],
    pros: ["Very easy", "Huge template library", "Great output quality"],
    cons: ["Some assets gated behind Pro", "Not a full design suite"],
    faqs: [],
    is_featured: false,
    sort_order: 12,
  },

  // --- Equipment / Supplies ---
  {
    name: "Chemical Guys",
    slug: "chemical-guys",
    category_slug: "equipment-supplies",
    short_description:
      "Popular detailing chemicals and kits — widely available and beginner-friendly for mobile setups.",
    long_description:
      "## Chemical Guys (2026)\n\nChemical Guys is known for a wide product lineup. For mobile detailers, availability and variety can be convenient.",
    affiliate_url: aff("chemical-guys"),
    official_site_url: "https://www.chemicalguys.com",
    pricing_starts_at: "Varies",
    pricing_details:
      "Pricing depends on products and bundles. Compare cost-per-oz when stocking your mobile rig.",
    rating: 4.3,
    best_for: "Easy-to-find chemicals and bundles.",
    features: ["Wide product lineup", "Bundles", "Retail availability"],
    feature_tags: ["equipment"],
    pros: ["Easy to source", "Huge lineup", "Beginner-friendly"],
    cons: ["Not always best value", "Some overlapping products"],
    faqs: [],
    is_featured: false,
    sort_order: 13,
  },
  {
    name: "Meguiar's",
    slug: "meguiars",
    category_slug: "equipment-supplies",
    short_description:
      "Trusted detailing brand with pro-grade staples — a strong choice for consistent results.",
    long_description:
      "## Meguiar's (2026)\n\nMeguiar's has long-standing products used by professionals and enthusiasts. Many mobile detailers rely on their staples.",
    affiliate_url: aff("meguiars"),
    official_site_url: "https://www.meguiars.com",
    pricing_starts_at: "Varies",
    pricing_details:
      "Pricing varies by product. Pro lines can be cost-effective when bought in bulk.",
    rating: 4.6,
    best_for: "Reliable pro staples.",
    features: ["Polishes", "Compounds", "Coatings", "Interior care"],
    feature_tags: ["equipment"],
    pros: ["Consistent results", "Widely trusted", "Good pro options"],
    cons: ["Some SKUs hard to find locally", "Large catalog"],
    faqs: [],
    is_featured: false,
    sort_order: 14,
  },
  {
    name: "Griot's Garage",
    slug: "griots-garage",
    category_slug: "equipment-supplies",
    short_description:
      "Premium detailing products and accessories, known for quality and enthusiast/pro crossover.",
    long_description:
      "## Griot's Garage (2026)\n\nGriot's is often chosen for quality. If your brand is positioned more premium, it can align well.",
    affiliate_url: aff("griots-garage"),
    official_site_url: "https://www.griotsgarage.com",
    pricing_starts_at: "Varies",
    pricing_details: "Pricing depends on product category; bundles can help stock faster.",
    rating: 4.5,
    best_for: "Premium positioning and quality kits.",
    features: ["Premium chemicals", "Accessories", "Tools"],
    feature_tags: ["equipment"],
    pros: ["Quality products", "Great accessories", "Strong brand"],
    cons: ["Higher cost", "Not always in local retail"],
    faqs: [],
    is_featured: false,
    sort_order: 15,
  },
  {
    name: "AutoGeek",
    slug: "autogeek",
    category_slug: "equipment-supplies",
    short_description:
      "One-stop shop for detailing supplies and pro brands — useful for stocking and replenishing your mobile rig.",
    long_description:
      "## AutoGeek (2026)\n\nAutoGeek carries a broad set of brands and tools. It's helpful when you're standardizing products across jobs.",
    affiliate_url: aff("autogeek"),
    official_site_url: "https://www.autogeek.net",
    pricing_starts_at: "Varies",
    pricing_details: "Pricing varies; look for bulk deals and free shipping thresholds.",
    rating: 4.4,
    best_for: "Stocking a wide mix of products.",
    features: ["Wide catalog", "Bundles", "Pro brands"],
    feature_tags: ["equipment"],
    pros: ["Huge selection", "Good bundles", "Pro brand access"],
    cons: ["Shipping time varies", "Easy to overspend"],
    faqs: [],
    is_featured: false,
    sort_order: 16,
  },
];

export const guides = [
  {
    title: "How to Start a Mobile Car Detailing Business (2026)",
    slug: "how-to-start-mobile-detailing-business",
    excerpt:
      "A step-by-step 2026 launch checklist: equipment, pricing, insurance basics, marketing, and the software stack that keeps you organized.",
    content:
      "# How to Start a Mobile Car Detailing Business (2026)\n\nStarting in 2026 is easier than ever — if you build a tight workflow.\n\n## 1) Pick your service menu\nCreate 3–5 packages (maintenance wash, interior reset, full detail, paint enhancement, ceramic add-on).\n\n## 2) Build a simple system\nUse one tool for scheduling + invoicing, one for payments, and one for marketing follow-up.\n\n## 3) Nail your pricing\nStart with a minimum job size, add travel zones, and upsell high-margin add-ons.\n\n## 4) Get customers\nFocus on Google Business Profile, reviews, before/after content, and referral incentives.\n\n## 5) Scale\nStandardize your process, then add a second tech/van once demand is consistent.\n",
    category_slug: "software-business-tools",
    related_tool_slugs: ["jobber", "housecall-pro", "square", "mailchimp"],
    sort_order: 1,
  },
  {
    title: "Best CRM for Mobile Detailing (2026)",
    slug: "best-crm-mobile-detailing",
    excerpt:
      "CRMs that help detailers track leads, automate follow-ups, and generate repeat business — with 2026-ready workflows.",
    content:
      "# Best CRM for Mobile Detailing (2026)\n\nA CRM helps you turn one-time clients into repeat customers.\n\n## What to prioritize\n- Follow-up automation (reviews, reminders, win-back sequences)\n- Customer history (vehicles, preferences, notes)\n- Easy tagging/segmentation\n\n## Recommended approach\nIf you're new: start simple (Jobber/Housecall Pro CRM basics).\nIf you're growth-focused: pair a real CRM/automation tool (HighLevel or ActiveCampaign) with your scheduling system.\n",
    category_slug: "marketing-customer-acquisition",
    related_tool_slugs: ["activecampaign", "highlevel", "zoho-crm", "jobber"],
    sort_order: 2,
  },
  {
    title: "Mobile Detailing Pricing & Packages Template (2026)",
    slug: "mobile-detailing-pricing-packages-2026",
    excerpt:
      "A practical pricing framework for 2026: packages, add-ons, minimums, and how to stop undercharging.",
    content:
      "# Mobile Detailing Pricing & Packages (2026)\n\n## The 3-package rule\nOffer a Good/Better/Best package so clients self-select.\n\n## Add-ons are your margin\nOdor removal, pet hair, engine bay, and ceramic boosters can raise ticket size quickly.\n\n## Set a minimum\nA minimum job price protects your time and travel.\n",
    category_slug: "software-business-tools",
    related_tool_slugs: ["jobber", "square", "quickbooks-online"],
    sort_order: 3,
  },
  {
    title: "Local Marketing Playbook for Mobile Detailers (2026)",
    slug: "local-marketing-playbook-mobile-detailing-2026",
    excerpt:
      "A 2026 marketing system: Google reviews, content, referral loops, and follow-up automation to keep your calendar full.",
    content:
      "# Local Marketing Playbook (2026)\n\n## The core loop\n1) Great job → 2) Before/after content → 3) Review request → 4) Referral incentive → 5) Automated follow-up\n\n## Tools that help\nUse email automation (ActiveCampaign) or an all-in-one platform (HighLevel) to keep follow-ups consistent.\n",
    category_slug: "marketing-customer-acquisition",
    related_tool_slugs: ["activecampaign", "highlevel", "canva", "mailchimp"],
    sort_order: 4,
  },
];
