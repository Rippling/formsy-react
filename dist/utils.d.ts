import { Validations, Values } from './interfaces';
declare const _default: {
    arraysDiffer(a: unknown[], b: unknown[]): boolean;
    objectsDiffer(a: object, b: object): boolean;
    isSame(a: unknown, b: unknown): boolean;
    find<T>(collection: T[], fn: (item: T) => boolean): T;
    runRules(value: any, currentValues: Values, validations: Validations, validationRules: Validations): Promise<{
        errors: string[];
        failed: string[];
        success: string[];
    }>;
    isPlainObject(value: unknown): boolean;
};
export default _default;
