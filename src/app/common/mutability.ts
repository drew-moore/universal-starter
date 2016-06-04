import * as SI from 'seamless-immutable';

export const immutable: <T>(it: T, prototype?: any) => T & Immutable.ObjectMethods<T> =
                 <T>(it, proto) => SI<T>( it, { prototype: getProto( proto || it ) } );

export const mutable: <T>(it: T, deep?: boolean) =>  T =
                 <T>(it, deep = true) =>
                     SI.isImmutable( it ) ? (<Immutable.ObjectMethods<T>> it).asMutable( { deep: deep } ) : it;

export const mutate: <T>(input: T, mutation: (input: T)=> T, prototype?: any) => T =
                 <T>(input, mutation, prototype?) => immutable<T>( mutation( mutable( input ) ), prototype );

export const mutateTo: <I, O>(input: I, mutation: (input: I)=> O, prototype?: any) => O
                 = <I, O>(input, mutation, prototype) => immutable<I>( mutation( mutable( input ) ), prototype );

export const getProto: (it: any) => any = (it) => it.prototype ||
                                                  Object.getPrototypeOf( it ) ||
                                                  it.__proto__ ||
                                                  (it.constructor || {}).prototype ||
                                                  it;

export interface ImmutableArray<T> extends Array<T>, Immutable.ArrayMethods<T> {}

export const immutableArray: <T>()=> ImmutableArray<T> = <T>() => {
  
  return SI<Array<T>>([]);
};