export const Formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export const Form = {
  serialize(form, func) {
    let result = Array.from(form.querySelectorAll("input:not([type='submit'])")).reduce(
      (obj, input) => {
        obj[input.name] = input.value;
        return obj;
      },
      {}
    );

    if (func !== null && func !== undefined) {
      console.log(func);
      result = func(result);
    }
    return result;
  }
}

export const FormValidationRules = {};
