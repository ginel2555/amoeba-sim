// Core simulation types

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface Particle {
  position: Vector3D;
  velocity: Vector3D;
  force: Vector3D;
  mass: number;
}

export interface SimulationState {
  time: number;
  particles: Particle[];
  temperature: number;
  chemicalGradients: Map<string, number>;
}

export interface OrganelleState {
  type: OrganelleType;
  position: Vector3D;
  size: number;
  active: boolean;
}

export enum OrganelleType {
  Nucleus = 'nucleus',
  Vacuole = 'vacuole',
  Mitochondrion = 'mitochondrion',
  FoodVacuole = 'foodVacuole'
}

export interface SimulationConfig {
  timeStep: number;
  particleCount: number;
  temperature: number;
  viscosity: number;
  surfaceTension: number;
}

export type UpdateFunction = (state: SimulationState, config: SimulationConfig) => void;