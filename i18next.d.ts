import 'i18n';

declare module 'i18next' {
  interface TFunction<N extends Namespace = DefaultNamespace, TKPrefix = undefined> {
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends string = string,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
    ): TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>;
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends stringWithObject = object,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
      options?: TOptions<TInterpolationMap> & {
        returnDetails: true;
        returnObjects: true;
      },
    ): TFunctionDetailedResult<TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>>;
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends string = string,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
      options?: TOptions<TInterpolationMap> & { returnDetails: true },
    ): TFunctionDetailedResult<TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>>;
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends stringWithObject = object,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
      options?: TOptions<TInterpolationMap> & { returnObjects: true },
    ): TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>;
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends string = string,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
      options?: TOptions<TInterpolationMap>,
    ): TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>;
    <
      TKeys extends TFuncKey<N, TKPrefix> | TemplateStringsArray extends infer A ? A : never,
      TDefaultResult extends string = string,
      TInterpolationMap extends object = StringMap,
    >(
      key: TKeys | TKeys[],
      defaultValue?: string,
      options?: TOptions<TInterpolationMap> | string,
    ): TFuncReturn<N, TKeys, TDefaultResult, TKPrefix>;
  }
}
