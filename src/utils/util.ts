import 'highlight.js/styles/hybrid.css';

import cheerio from 'cheerio';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import hljs from 'highlight.js';

/**
 * サンプル
 * 値を2倍にする
 */

export const sampleFunction = (input: number): number => {
  return input * 2;
};

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'd MMMM, yyyy');
};

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText);
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, { language: lang?.replace(/^language-/, '') || '' });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });
  return $.html();
};
