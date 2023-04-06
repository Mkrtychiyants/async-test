import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  // eslint-disable-next-line class-methods-use-this
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static load() {
    return read()
      .then((res) => json(res))
      .then((result) => {
        const saving = JSON.parse(result);
        const saveObj = new GameSavingLoader(saving.id, saving.created, saving.userInfo);
        return saveObj;
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

