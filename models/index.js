const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
// A user has many posts linked by Post's user_id
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A post has one user, linked by Post's user_id
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// User is linked to Post through Vote
// on Vote's user_id
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

// Post is linked to User through Vote
// on Vote's post_id
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// A vote belongs to one User, linked by Vote's user_id
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// A vote belongs to a Post, linked by Vote's post_id
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// A User may vote several times, linked by Vote's user_id
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// A post may have several votes, linked by Vote's post_id
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };