class Comment {
  user = 'Иванов Иван';

  #id;

  #createdAt;

  #author;

  constructor(text) {
    this.text = text;
    this.#id = getUniqId();
    this.#createdAt = new Date();
    this.#author = this.user;
  }

  get id() {
    return this.#id;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get author() {
    return this.#author;
  }

  static validate(com) {
    function isIdValid() {
      return typeof com.id === 'string' && com.id !== '';
    }

    function isTextValid() {
      return typeof com.text === 'string' && com.text.length <= 280;
    }

    function isDateValid() {
      return com.createdAt instanceof Date;
    }

    function isAuthorvalid() {
      return typeof com.author === 'string' && com.author !== '';
    }
    console.log(
      isIdValid() && isTextValid() && isDateValid() && isAuthorvalid(),
    );
    return isIdValid() && isTextValid() && isDateValid() && isAuthorvalid();
  }
}
export default Comment;
