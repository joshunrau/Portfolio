import type { IconType } from 'react-icons';

export default class Skill extends Object {
  constructor(public name: string, public icon: IconType) {
    super();
  }
}