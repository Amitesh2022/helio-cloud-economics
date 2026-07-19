import { useQuery } from '@tanstack/react-query'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useOpsStore } from './store'
import './App.css'

type Service = { id: number; name: string; latency: number; status: 'healthy' | 'degraded' }

const loadServices = async (): Promise<Service[]> => {
  await new Promise((resolve) => setTimeout(resolve, 120))
  return [
    { id: 1, name: 'Inference platform', latency: 42, status: 'healthy' },
    { id: 2, name: 'Data warehouse', latency: 87, status: 'healthy' },
    { id: 3, name: 'Observability estate', latency: 164, status: 'degraded' },
  ]
}

function Dashboard() {
  const { data = [], isPending } = useQuery({ queryKey: ['services'], queryFn: loadServices })
  const incidents = useOpsStore((state) => state.incidents)
  const resolve = useOpsStore((state) => state.resolve)
  const healthy = data.filter((service) => service.status === 'healthy').length

  return (
    <main>
      <header className="hero">
        <div><span className="eyebrow">FinOps intelligence</span><h1>Cloud economics cockpit</h1></div>
        <span className="live"><i /> Live cost signals</span>
      </header>
      <section className="metrics" aria-label="System metrics">
        <article><span>Optimized workloads</span><strong>{isPending ? '…' : `${healthy}/${data.length}`}</strong><small>TanStack Query cache</small></article>
        <article><span>Savings actions</span><strong>{incidents.filter((item) => !item.resolved).length}</strong><small>Zustand global store</small></article>
        <article><span>Cost efficiency</span><strong>{data.length ? Math.round(data.reduce((sum, item) => sum + item.latency, 0) / data.length) : 0}ms</strong><small>Derived in render</small></article>
      </section>
      <div className="grid">
        <section className="panel"><div className="panel-title"><h2>Workload economics</h2><span>3 cost centers</span></div>{data.map((service) => <div className="row" key={service.id}><span className={`dot ${service.status}`} /><div><b>{service.name}</b><small>{service.status}</small></div><strong>{service.latency}ms</strong></div>)}</section>
        <section className="panel"><div className="panel-title"><h2>Optimization queue</h2><span>Value priority</span></div>{incidents.map((incident) => <div className={`incident ${incident.resolved ? 'resolved' : ''}`} key={incident.id}><div><b>{incident.title}</b><small>{incident.owner} · {incident.severity}</small></div><button disabled={incident.resolved} onClick={() => resolve(incident.id)}>{incident.resolved ? 'Resolved' : 'Resolve'}</button></div>)}</section>
      </div>
    </main>
  )
}

function Architecture() {
  return <main><header className="hero"><div><span className="eyebrow">Architecture</span><h1>Economics by design</h1></div></header><section className="panel prose"><h2>Production patterns</h2><p>Route boundaries, cached server state, a small global client store, strict TypeScript, accessible semantics, and deterministic tests keep this lab scalable.</p></section></main>
}

export default function App() {
  return <div className="shell"><nav><b>Helio<span>/ops</span></b><div><NavLink to="/">Dashboard</NavLink><NavLink to="/architecture">Architecture</NavLink></div></nav><Routes><Route path="/" element={<Dashboard />} /><Route path="/architecture" element={<Architecture />} /></Routes></div>
}
