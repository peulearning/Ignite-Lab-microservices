import { Content } from './content';

describe('Notification content', () => {
  it('should be albe to create a notification content', () => {
    const content = new Content('Vocer ecebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to crearte a notification content with less than 5 charactors', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrow();
  });

  it('should not be able to crearte a notification content with more than 240 charactors', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
