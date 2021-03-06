package com.zjy.blog.blog_start.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zjy.blog.blog_start.domain.Authority;
import com.zjy.blog.blog_start.repository.AuthorityRepository;

/**
 * Authority 服务接口的实现.
 * 
 * @since 1.0.0 2017年5月30日
 * @author <a href="https://waylau.com">Way Lau</a> 
 */
@Service
public class AuthorityServiceImpl implements AuthorityService {

	@Autowired
	private AuthorityRepository authorityRepository;
	
	/* (non-Javadoc)
	 * @see com.waylau.spring.boot.blog.service.AuthorityService#getAuthorityById(java.lang.Long)
	 */
	@Override
	public Authority getAuthorityById(Long id) {
		return authorityRepository.findOne(id);
	}

}
