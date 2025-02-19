import { ResourceOptimizer } from "./optimizer"

interface PodData {
  name: string
  cpu: number
  memory: number
  cost: number
}

interface OptimizationResult extends PodData {
  cpuBefore: number
  memoryBefore: number
  costBefore: number
}

class Store {
  private data: OptimizationResult[] = []

  addPod(pod: PodData): void {
    const optimizer = new ResourceOptimizer()
    const [optimizedCpu, optimizedMemory, optimizedCost] = optimizer.optimize(pod.cpu, pod.memory, pod.cost)

    this.data.push({
      name: pod.name,
      cpuBefore: pod.cpu,
      memoryBefore: pod.memory,
      costBefore: pod.cost,
      cpu: optimizedCpu,
      memory: optimizedMemory,
      cost: optimizedCost,
    })
  }

  getPods(): OptimizationResult[] {
    return this.data
  }

  clear(): void {
    this.data = []
  }
}

export const store = new Store()

