import Comment from '../models/comment-model.js';
import Post from '../models/post-model.js';
import User from '../models/user-model.js';

// INDEX – Get all comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).populate('author', 'username').populate('post', 'title');
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching comments', error: error.message });
  }
};

// SHOW – Get one comment by ID
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('author', 'username').populate('post', 'title');
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching comment', error: error.message });
  }
};

// CREATE – Add a new comment
export const createComment = async (req, res) => {
  // const { content, post, author } = req.body;
console.log(req.body);

  try {
    const post = await Post.findById(req.body.post);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
console.log(post)
    const user = await User.findById(req.body.author);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
console.log(post)
    // const newComment = new Comment({
    //   content,
    //   post: post,
    //   author: author,
    // });

    // const savedComment = await newComment.save();
    const savedComment = await Comment.create(req.body)
    console.log(savedComment);

    res.status(201).json(savedComment);

  } catch (error) {
    res.status(400).json({ message: 'Error creating comment', error: error.message });
  }
};

// UPDATE – Update a comment by ID
export const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'username').populate('post', 'title');

    if (!updatedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json(updatedComment);

  } catch (error) {
    res.status(400).json({ message: 'Error updating comment', error: error.message });
  }
};

// DELETE – Remove a comment
export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json({ message: 'Comment deleted successfully', comment: deletedComment });

  } catch (error) {
    res.status(400).json({ message: 'Error deleting comment', error: error.message });
  }
};

