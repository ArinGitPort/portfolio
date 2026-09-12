const experienceBranches = [
  { label: "Built", detail: "Multi-router and multi-switch topologies" },
  { label: "Configured", detail: "VLANs, routing, DHCP, NAT, and IPv4/IPv6" },
  { label: "Troubleshot", detail: "Connectivity and network services" },
]

export function ExperienceTree() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-chip text-foreground">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect width="6" height="6" x="9" y="2" rx="1" />
            <rect width="6" height="6" x="3" y="16" rx="1" />
            <rect width="6" height="6" x="15" y="16" rx="1" />
            <path d="M12 8v4M6 16v-2h12v2" />
          </svg>
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground">Networking Laboratory Exercises</h3>
          <p className="text-xs text-muted">Cisco Packet Tracer</p>
        </div>
      </div>

      <div className="ml-[1.125rem] space-y-3 border-l border-line pt-4 pl-7">
        {experienceBranches.map((branch) => (
          <div
            className="relative before:absolute before:top-3 before:-left-7 before:h-px before:w-4 before:bg-line after:absolute after:top-[9px] after:-left-3.5 after:size-1.5 after:rounded-full after:bg-muted"
            key={branch.label}
          >
            <p className="text-xs font-medium text-foreground">{branch.label}</p>
            <p className="text-sm leading-5 text-subtle">{branch.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
