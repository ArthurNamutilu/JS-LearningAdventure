// Class Declaration and class Representation
// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  // Expression; the class is anonymus but assigned to a variable

  const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
  };

  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
  };