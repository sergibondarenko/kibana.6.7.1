import { Duration } from 'moment';
import { ByteSizeValue } from './byte_size_value';
import { ContextReference, Reference, SiblingReference } from './references';
import { AnyType, ArrayOptions, ByteSizeOptions, ConditionalType, ConditionalTypeValue, DurationOptions, MapOfOptions, NumberOptions, ObjectType, Props, RecordOfOptions, StringOptions, Type, TypeOf, TypeOptions } from './types';
export { ObjectType, TypeOf, Type };
export { ByteSizeValue } from './byte_size_value';
declare function any(options?: TypeOptions<any>): AnyType;
declare function boolean(options?: TypeOptions<boolean>): Type<boolean>;
declare function string(options?: StringOptions): Type<string>;
declare function literal<T extends string | number | boolean>(value: T): Type<T>;
declare function number(options?: NumberOptions): Type<number>;
declare function byteSize(options?: ByteSizeOptions): Type<ByteSizeValue>;
declare function duration(options?: DurationOptions): Type<Duration>;
/**
 * Create an optional type
 */
declare function maybe<V>(type: Type<V>): Type<V | undefined>;
declare function object<P extends Props>(props: P, options?: TypeOptions<{
    [K in keyof P]: TypeOf<P[K]>;
}>): ObjectType<P>;
declare function arrayOf<T>(itemType: Type<T>, options?: ArrayOptions<T>): Type<T[]>;
declare function mapOf<K, V>(keyType: Type<K>, valueType: Type<V>, options?: MapOfOptions<K, V>): Type<Map<K, V>>;
declare function recordOf<K extends string, V>(keyType: Type<K>, valueType: Type<V>, options?: RecordOfOptions<K, V>): Type<Record<K, V>>;
declare function oneOf<A, B, C, D, E, F, G, H, I, J>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>, Type<F>, Type<G>, Type<H>, Type<I>, Type<J>], options?: TypeOptions<A | B | C | D | E | F | G | H | I | J>): Type<A | B | C | D | E | F | G | H | I | J>;
declare function oneOf<A, B, C, D, E, F, G, H, I>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>, Type<F>, Type<G>, Type<H>, Type<I>], options?: TypeOptions<A | B | C | D | E | F | G | H | I>): Type<A | B | C | D | E | F | G | H | I>;
declare function oneOf<A, B, C, D, E, F, G, H>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>, Type<F>, Type<G>, Type<H>], options?: TypeOptions<A | B | C | D | E | F | G | H>): Type<A | B | C | D | E | F | G | H>;
declare function oneOf<A, B, C, D, E, F, G>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>, Type<F>, Type<G>], options?: TypeOptions<A | B | C | D | E | F | G>): Type<A | B | C | D | E | F | G>;
declare function oneOf<A, B, C, D, E, F>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>, Type<F>], options?: TypeOptions<A | B | C | D | E | F>): Type<A | B | C | D | E | F>;
declare function oneOf<A, B, C, D, E>(types: [Type<A>, Type<B>, Type<C>, Type<D>, Type<E>], options?: TypeOptions<A | B | C | D | E>): Type<A | B | C | D | E>;
declare function oneOf<A, B, C, D>(types: [Type<A>, Type<B>, Type<C>, Type<D>], options?: TypeOptions<A | B | C | D>): Type<A | B | C | D>;
declare function oneOf<A, B, C>(types: [Type<A>, Type<B>, Type<C>], options?: TypeOptions<A | B | C>): Type<A | B | C>;
declare function oneOf<A, B>(types: [Type<A>, Type<B>], options?: TypeOptions<A | B>): Type<A | B>;
declare function oneOf<A>(types: [Type<A>], options?: TypeOptions<A>): Type<A>;
declare function contextRef<T>(key: string): ContextReference<T>;
declare function siblingRef<T>(key: string): SiblingReference<T>;
declare function conditional<A extends ConditionalTypeValue, B, C>(leftOperand: Reference<A>, rightOperand: Reference<A> | A, equalType: Type<B>, notEqualType: Type<C>, options?: TypeOptions<B | C>): ConditionalType<A, B, C>;
export declare const schema: {
    any: typeof any;
    arrayOf: typeof arrayOf;
    boolean: typeof boolean;
    byteSize: typeof byteSize;
    conditional: typeof conditional;
    contextRef: typeof contextRef;
    duration: typeof duration;
    literal: typeof literal;
    mapOf: typeof mapOf;
    maybe: typeof maybe;
    number: typeof number;
    object: typeof object;
    oneOf: typeof oneOf;
    recordOf: typeof recordOf;
    siblingRef: typeof siblingRef;
    string: typeof string;
};
export declare type Schema = typeof schema;
//# sourceMappingURL=index.d.ts.map