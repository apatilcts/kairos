"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const platform = [
  {
    title: "AI Engine",
    href: "/platform/ai-engine",
    description: "Advanced machine learning models for resource optimization.",
  },
  {
    title: "Data Ingestion",
    href: "/platform/data-ingestion",
    description: "Collect and process metrics from multiple sources.",
  },
  {
    title: "Features",
    href: "/platform/features",
    description: "Core platform capabilities and functionalities.",
  },
  {
    title: "API",
    href: "/platform/api",
    description: "Integration APIs and documentation.",
  },
  {
    title: "Optimize",
    href: "/platform/optimize",
    description: "Resource optimization and cost management.",
  },
  {
    title: "Metrics",
    href: "/platform/metrics",
    description: "Performance monitoring and analytics.",
  },
]

const solutions = [
  {
    title: "Multi-Cloud",
    href: "/solutions/multi-cloud",
    description: "Manage resources across multiple cloud providers.",
  },
  {
    title: "Cost Optimization",
    href: "/solutions/cost-optimization",
    description: "Reduce infrastructure costs with AI-driven insights.",
  },
  {
    title: "Performance",
    href: "/solutions/performance",
    description: "Optimize application and cluster performance.",
  },
  {
    title: "Security",
    href: "/solutions/security",
    description: "Secure your Kubernetes infrastructure.",
  },
]

const enterprise = [
  {
    title: "Features",
    href: "/enterprise/features",
    description: "Enterprise-grade capabilities and controls.",
  },
  {
    title: "Support",
    href: "/enterprise/support",
    description: "24/7 enterprise support and SLAs.",
  },
  {
    title: "Compliance",
    href: "/enterprise/compliance",
    description: "Security compliance and certifications.",
  },
  {
    title: "Custom Solutions",
    href: "/enterprise/custom",
    description: "Tailored enterprise solutions.",
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {platform.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Enterprise</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {enterprise.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sandbox" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Sandbox</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

