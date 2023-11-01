// TODO 1
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  // TODO 2
  const validateNumberInput = (a, b, c) => {
    if (typeof a !== 'number') {
      throw new ValidationError('Argumen pertama harus number');
    }
    if (typeof b !== 'number') {
      throw new ValidationError('Argumen kedua harus number');
    }
    if (typeof c !== 'number') {
      throw new ValidationError('Argumen ketiga harus number');
    }
  };
  
  const detectTriangle = (a, b, c) => {
    try {
      // TODO 3
      validateNumberInput(a, b, c);
  
      if (a === b && b === c) {
        return 'Segitiga sama sisi';
      }
  
      if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
      }
  
      return 'Segitiga sembarang';
    } catch (error) {
      return error.message;
    }
  };
  
  // Contoh penggunaan:
  console.log(detectTriangle(1, 1, 1)); // Output: 'Segitiga sama sisi'
  console.log(detectTriangle(4, 4, 2)); // Output: 'Segitiga sama kaki'
  console.log(detectTriangle(3, 4, 6)); // Output: 'Segitiga sembarang'
  console.log(detectTriangle(1, false, 1)); // Output: 'Argumen kedua harus number'
  console.log(detectTriangle('a', 3, 5)); // Output: 'Argumen pertama harus number'
  console.log(detectTriangle(12, 2, null)); // Output: 'Argumen ketiga harus number'
  