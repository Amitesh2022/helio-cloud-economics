import { create } from 'zustand'

type Incident = { id: number; title: string; owner: string; severity: 'P1' | 'P2'; resolved: boolean }
type OpsState = { incidents: Incident[]; resolve: (id: number) => void }

export const useOpsStore = create<OpsState>((set) => ({
  incidents: [
    { id: 1, title: 'Queue saturation', owner: 'Platform', severity: 'P1', resolved: false },
    { id: 2, title: 'Slow search index', owner: 'Data', severity: 'P2', resolved: false },
    { id: 3, title: 'Certificate rotation', owner: 'Security', severity: 'P2', resolved: true },
  ],
  resolve: (id) => set((state) => ({ incidents: state.incidents.map((item) => item.id === id ? { ...item, resolved: true } : item) })),
}))
