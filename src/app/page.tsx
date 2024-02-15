/**
 * トップページ
 */
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import CheckIcon from '../../public/check.svg';
import LinkBtn from '../components/elements/btn/LinkBtn';
import ArticleList from '../components/templates/ArticleList';
import { mulish } from '../styles/fonts';
import { getList } from '../utils/microcms';

export default async function Page() {
  const data = await getList({
    limit: 3,
  });
  return (
    <>
      <main className='px-6 pt-14 lg:px-16'>
        <section className='mb-16 flex'>
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <h2 className={`mb-7 pt-16 text-4xl font-bold leading-tight lg:pt-16 lg:text-8xl`}>
                Hi,{' '}
                <span className='relative z-10 inline-block px-1 after:absolute after:-bottom-4 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-6 after:bg-[#03FFC5] lg:after:h-4'>
                  I&apos;m Hiroko
                </span>
                ,
                <br />
                <span className='relative z-10 inline-block px-1 after:absolute after:-bottom-4 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-6 after:bg-[#03FFC5] lg:after:h-4'>
                  Front-end web
                </span>
                <br />
                developer
              </h2>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <p
                className={`${mulish.className} animate-slide-in-bottom mb-10 text-xl leading-snug lg:text-2xl`}
              >
                I&apos;ve been working as a Front-end web developer for 15 years.
                <br />
                Now, based in Yatsugatake.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <LinkBtn
                name='my works'
                href='/works'
                target='_self'
              ></LinkBtn>
            </motion.div>
          </div>
        </section>
        {/* About Section */}
        <section
          id='works'
          className='py-6 lg:py-10'
        >
          <h2 className='mb-10 text-4xl font-bold lg:text-5xl'>my works</h2>
          <ArticleList articles={data.contents} />
        </section>

        <section id='about'>
          <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-11'>
            <div className='grid grid-cols-1 lg:h-screen lg:grid-cols-2'>
              <div className='relative z-10 lg:py-16'>
                <div className='relative h-64 sm:h-80 lg:h-full'>
                  <img
                    alt='my picture'
                    src='/img_aboutme.jpg'
                    className='absolute inset-0 size-full object-cover'
                  />
                </div>
              </div>

              <div className='relative flex items-center'>
                <div className='p-8 sm:p-16 lg:p-24'>
                  <h2 className='mb-10 text-4xl font-bold lg:text-5xl'>About me</h2>

                  <p className='mt-4'>
                    中野紘子は山梨を拠点にしたフロントエンドエンジニアです。群馬県で生まれ、京都にて様々な企画、開発の経験を積んだ後、2022年に山梨へと拠点を移しました。
                  </p>
                  <p className='mt-4'>
                    Flashサイトの制作からキャリアをスタートし、デジタル教材開発、TV番組と連動したアプリケーション開発、Webサイト制作に携わっています。
                  </p>
                  <p className='mt-4'>
                    常に新しい技術やベストプラクティスに興味を持ち、自己成長と業務効率の向上に努めています。
                  </p>
                  <p className='mt-4'>趣味は読書とゲーム、真面目で健康なことが取り柄です。</p>
                  <hr className='mt-10' />
                  <p className='mt-10'>
                    Hiroko Nakano is a front-end web developer based in Yamanashi. Born in Gunma
                    Prefecture, I gained experience in various planning and development projects in
                    Kyoto before moving to Yamanashi in 2022.
                  </p>

                  <p className='mt-4'>
                    I started my career by creating Flash websites, and have since been involved in
                    the development of digital educational materials, applications linked to TV
                    programs, and website development.
                  </p>

                  <p className='mt-4'>
                    Always interested in new technologies and best practices, I strive for personal
                    growth and improved work efficiency.
                  </p>

                  <p className='mt-4'>
                    My hobbies are reading and playing games, and my strengths are hardworking and
                    healthy!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of About Section */}

        {/* Work Experience Section */}

        <section className=''>
          <div className='container mx-auto py-16 lg:max-w-3xl'>
            <h2 className='mb-3 text-4xl font-bold lg:text-5xl'>My work experience</h2>
            <h3 className='mb-10'>*including private works</h3>
            <div className='space-y-8'>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2023</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>（株）教育同人社、教材リンクサイト実装</h4>
                    </div>
                    <p className='ml-7 '>
                      紙教材に印刷された二次元コードを読み取ると、解答と関連コンテンツへのリンクが表示されるサイトを実装（AWS
                      EC2 + microCMS + Next.js + React + CSS Modules）
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2022</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>ドリル配信プラットフォーム開発</h4>
                    </div>
                    <p className='ml-7 '>
                      小中学校向けのクラウド型ドリル配信プラットフォームを開発（Nuxt.js + Sass +
                      CircleCI）
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2016</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>
                        音楽フェス{' '}
                        <a
                          href='https://circle.fukuoka.jp/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          CIRCLE
                        </a>
                        ,{' '}
                        <a
                          href='https://day-off.today/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          Q
                        </a>
                        ,{' '}
                        <a
                          href='https://kyotoonpaku.net/2023/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          京都音楽博覧会
                        </a>
                        のサイト実装
                      </h4>
                    </div>
                    <p className='ml-7'>
                      毎年いくつかの音楽フェスのサイト実装を担当
                      <br />
                      その他、アーティストの公式サイトや特設サイトなども複数実装担当
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2014</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>
                        NHK eテレ ビットワールド 番組連動アプリケーション開発
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      生放送時に番組と連動してリアルタイムで遊ぶことのできるゲームの開発（JavaScript）や、毎週番組から出されるお題に対して視聴者が投稿できるアプリケーション（Flash,
                      JavaScript）の開発を行う（〜2016）
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2010</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>デジタル教材制作に携わり始める</h4>
                    </div>
                    <p className='ml-7 '>
                      2010年当時はFlash製アプリで、教科書紙面の閲覧、音声や動画の再生機能などを搭載
                      <br />
                      その後、electronや出版社独自のビューアなどフォーマットを変えながら2022年まで（株）三省堂のデジタル教材制作に携わる（最終的にはVue.jsなどを使用）
                    </p>
                  </li>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>
                        友人たちとミュージックポータルサイト
                        <a
                          href='https://your-unknown-music.com/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          &quot;your unknown music&quot;
                        </a>
                        を運営
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      Wordpressやtumblrを経て、現在はnoteにポストするとサイトに反映される仕組み
                      <br />
                      サイト実装やジュークボックスアプリ（Adobe
                      AIR製、現在は使用不可）の作成に携わる
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-3 text-lg font-bold md:text-xl'>2008</h3>
                <ul className='space-y-4'>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>
                        <a
                          href='https://www.ritsumei.ac.jp/ise/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          立命館大学情報理工学部
                        </a>
                        メディア情報学科卒業
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      前田ゼミにて情報検索について学ぶ
                      <br />
                      3〜4回生の間は京都市内のWeb制作会社にてデザイナーとしてアルバイトし経験を積む
                    </p>
                  </li>
                  <li className='space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <Image
                        src={CheckIcon}
                        alt={''}
                        className='size-4 fill-current'
                      />
                      <h4 className='font-bold'>
                        <a
                          href='https://flak.jp/'
                          target='blank'
                          className='underline hover:no-underline'
                        >
                          FLAKWORKS inc.
                        </a>{' '}
                        入社
                      </h4>
                    </div>
                    <p className='ml-7 '>
                      フロントエンドエンジニアとして勤務開始（〜現在）、主にFlashサイトの制作に携わる
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* End of Work Experience Section */}
      </main>
    </>
  );
}
