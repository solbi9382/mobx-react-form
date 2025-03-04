import BaseInterface from "./BaseInterface";
import OptionsModel from "./OptionsModel";
import StateInterface from "./StateInterface";
export default interface FieldInterface extends BaseInterface {
  id: string | undefined;
  key: string | undefined;
  name: string | undefined;
  options: OptionsModel | undefined;
  type: string | undefined;
  label: string | undefined;
  placeholder: string | undefined;
  extra: any;
  errorSync: string | null;
  errorAsync: string | null;
  validationErrorStack: string[];
  validationFunctionsData: any[];
  debouncedValidation: any;
  autoFocus: boolean;
  showError: boolean;
  checkValidationErrors: boolean;
  checked: any;
  value: any;
  initial: any;
  default: any;
  actionRunning: boolean;
  bindings: any;
  disabled: boolean;
  related: string[] | undefined;
  rules: string[] | undefined;
  validators: any[] | undefined;
  validatedValue: any;
  error: string | null;
  hasError: boolean;
  isValid: boolean;
  isDefault: boolean;
  isDirty: boolean;
  isPristine: boolean;
  isEmpty: boolean;
  resetting: boolean;
  clearing: boolean;
  focused: boolean;
  blurred: boolean;
  touched: boolean;
  changed: boolean;
  deleted: boolean;
  // handlers
  onChange(args: any): any;
  onToggle(args: any): any;
  onBlur(args: any): any;
  onFocus(args: any): any;
  onDrop(args: any): any;
  // methods: {
  setupField(
    key: string,
    path: string,
    data: any,
    props: any,
    update: boolean
  ): void;
  getComputedProp(key: any): any;
  checkValidationPlugins(): void;
  initNestedFields(field: any, update: boolean): void;
  invalidate(message?: string, async?: boolean): void;
  setValidationAsyncData(valid: boolean, message: string): void;
  resetValidation(deep: boolean): void;
  clear(deep?: boolean): void;
  reset(deep?: boolean): void;
  focus(): void;
  showErrors(show: boolean): void;
  showAsyncErrors(): void;
  observeValidationOnBlur(): void;
  observeValidationOnChange(): void;
  initMOBXEvent(type: string): void;
}

export interface FieldConstructor {
  key: string;
  path: string;
  data?: any;
  props?: any;
  update?: boolean;
  state: StateInterface;
}
