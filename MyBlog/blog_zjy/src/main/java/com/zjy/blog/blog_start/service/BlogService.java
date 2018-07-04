package com.zjy.blog.blog_start.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.zjy.blog.blog_start.domain.Blog;
import com.zjy.blog.blog_start.domain.User;

/**
 * Blog 服务接口.
 * 
 */
public interface BlogService {
	/**
	 * 保存Blog
	 * @param EsBlog
	 * @return
	 */
	Blog saveBlog(Blog blog);
	
	/**
	 * 删除Blog
	 * @param id
	 * @return
	 */
	void removeBlog(Long id);
	
	/**
	 * 根据id获取Blog
	 * @param id
	 * @return
	 */
	Blog getBlogById(Long id);
 
	/**
	 * 根据用户进行博客名称分页模糊查询（最新）
	 * @param user
	 * @return
	 */
	Page<Blog> listBlogsByTitleVote(User user, String title, Pageable pageable);
 
	/**
	 * 根据用户进行博客名称分页模糊查询（最热）
	 * @param user
	 * @return
	 */
	Page<Blog> listBlogsByTitleVoteAndSort(User user, String title, Pageable pageable);

	/**
	 * 阅读量递增
	 * @param id
	 */
	void readingIncrease(Long id);
 
}
