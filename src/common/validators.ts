export const required = (value: string) => value ? undefined : 'Required 🙀';

export const num = (value: string) => value && Number.isNaN(Number(value)) ?
    'Must be a number' : undefined;

export const greaterOrEqual = (min: number) => (value: string) =>
    value && Number(value) < min ? `Must be at least ${min} 🙀` : undefined;

export const positive = greaterOrEqual(0);
