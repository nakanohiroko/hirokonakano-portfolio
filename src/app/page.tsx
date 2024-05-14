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

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const data = await getList({
    limit: 3,
  });
  return (
    <>
      <main className='px-6 pt-14 lg:px-16'>
        {/* Main Section */}
        <section
          id='main'
          className='mb-16 flex'
        >
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
              <p className={`${mulish.className} mb-10 text-xl leading-snug lg:text-2xl`}>
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
                name='My works'
                href='/works'
                target='_self'
              ></LinkBtn>
            </motion.div>
          </div>
        </section>
        {/* End of Main Section */}

        {/* Works Section */}
        <section
          id='works'
          className='py-6 lg:py-10'
        >
          <h2 className='mb-10 text-4xl font-bold lg:text-5xl'>My works</h2>
          <ArticleList articles={data.contents} />
        </section>
        {/* End of Works Section */}

        {/* About Section */}
        <section id='about'>
          <div className='mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 xl:px-11'>
            <div className='grid grid-cols-1 xl:h-screen xl:grid-cols-2'>
              <div className='relative z-10 xl:py-16'>
                <div className='relative h-64 sm:h-80 xl:h-full'>
                  <Image
                    className='absolute inset-0 size-full object-cover'
                    alt='my picture'
                    src='/img_aboutme.jpg'
                    width={768}
                    height={1024}
                  />
                </div>
              </div>

              <div className='relative flex items-center'>
                <div className='p-8 sm:p-16 xl:p-24'>
                  <h2 className='mb-10 text-4xl font-bold lg:text-5xl'>About me</h2>

                  <p className='mt-4'>
                    2008年に京都の制作会社FLAKWORKS
                    inc.へフロントエンドエンジニアとして加入し、デジタル教材開発やWebサイト制作に携わっています。
                  </p>
                  <p className='mt-4'>
                    友人たちとプロジェクト（
                    <a
                      href='https://your-unknown-music.com/'
                      target='_blank'
                      className='underline hover:no-underline'
                    >
                      音楽ポータルサイト
                    </a>
                    の運営やカルチャーイベントの開催など）を立ち上げたり、思いついたアイディアを形にしてウェブサイトをつくったり（インタビュー記事だけを集めたブックマークサイト
                    <a
                      href='https://hatenanews.com/articles/201202/7569'
                      target='_blank'
                      className='underline hover:no-underline'
                    >
                      “GOOD INTERVIEW BOOKMARK”
                    </a>
                    , 瀬戸内芸術祭にて制作したストーリーマッピング・サービス“MILE-POST
                    PROJECT”等）、仕事だけでなくプライベートでも様々な活動に参加しています。
                  </p>
                  <p className='mt-4'>
                    コロナ禍を経て2022年に山梨・八ヶ岳山麓へ拠点を移してからは、ワークライフバランスが取れ、日々の暮らしをより楽しむことができるようになりました。
                  </p>
                  <p className='mt-4'>
                    趣味はゲームと散歩、取り柄は真面目で健康なこと。よく褒められるのはレスポンスの速さです。
                  </p>
                  <hr className='mt-10' />
                  <p className='mt-10'>
                    In 2008, I joined FLAKWORKS inc. as a front-end web developer and gained
                    experience in the development of digital educational materials and website.
                  </p>

                  <p className='mt-4'>
                    I have launched some projects with my friends, created websites based on ideas
                    that came to us. I have participated in various activities besides working.
                  </p>

                  <p className='mt-4'>
                    Since moving to Yatsugatake in 2022, I have found a better work-life balance and
                    am enjoying my daily life more.
                  </p>

                  <p className='mt-4'>
                    My hobbies are playing games and taking walks. I&apos;m hard-working and
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
                      <h4 className='font-bold'>教材リンクサイト実装</h4>
                    </div>
                    <p className='ml-7 '>
                      紙教材に印刷された二次元コードを読み取ると、解答と関連コンテンツへのリンクが表示される教材リンクサイトを実装（AWS
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
                      その他、アーティストの公式サイトや特設サイトなども複数実装を担当
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
                      <h4 className='font-bold'>テレビ番組連動アプリケーション開発</h4>
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
                      <h4 className='font-bold'>デジタル教材制作/開発に携わり始める</h4>
                    </div>
                    <p className='ml-7 '>
                      2010年当時はFlash製アプリで、教科書紙面の閲覧、音声や動画の再生機能などを搭載
                      <br />
                      その後、electronや出版社独自のビューアなどフォーマットを変えながら2022年までデジタル教科書制作に携わる（最終的にはVue.jsなどを使用）
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
