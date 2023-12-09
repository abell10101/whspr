import { Sound, User, Post, Follower, Comment } from '../../dbmodels';

export const seedDatabase = async () => {
  try {

    await User.bulkCreate([
      {
      username: 'RandomUser',
      profileImgUrl: 'https://website.com/profile-image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Rando',
      profileImgUrl: 'https://website.com/profile-image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'dom',
      profileImgUrl: 'https://website.com/profile-image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'angel',
      profileImgUrl: 'https://website.com/profile-image.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await Post.bulkCreate([
    {
      userId: 3,
      category: 'The Categorical',
      title: 'The Titular',
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      category: 'The Categorical',
      title: 'The Titular2',
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      category: 'comedy',
      title: 'Angel\'s Post',
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await Sound.bulkCreate([
    {
      postId: 1,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      postId: 2,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

    await Follower.bulkCreate([
      {
        userId: 1,
        followingId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        followingId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.info('\x1b[32m%s\x1b[0m', 'Seed script executed successfully');
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', 'Seed script failed', error);
  }
  await Comment.bulkCreate([
    {
      userId: 1,
      postId: 2,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
    },
    {
      userId: 2,
      postId: 2,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
    },
    {
      userId: 1,
      postId: 1,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
    },
    {
      userId: 3,
      postId: 1,
      soundUrl: 'https://storage.googleapis.com/whspr-sounds/audio/testsound.mp3',
    }
  ])
};


seedDatabase();