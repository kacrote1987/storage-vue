
import {success} from './result'
import { fail } from 'assert'
const user={
	"token": "66eebaca-acde-4f39-b2c1-54fe28fb923f",
	"id": 1,
	"name": "admin",
	"code": "admin",
	"roleId": 1,
	"roleName": "管理员",
	"perms": [{
			"id": 1,
			"name": "系统管理",
			"path": null,
			"pid": 0,
			"children": [{
					"id": 2,
					"name": "用户管理",
					"path": "/user",
					"pid": 1,
					"children": null
				},
				{
					"id": 3,
					"name": "部门管理",
					"path": "/dept",
					"pid": 1,
					"children": null
				},
				{
					"id": 4,
					"name": "数据字段",
					"path": "/dict",
					"pid": 1,
					"children": null
				}
			]
		},
		{
			"id": 5,
			"name": "库存管理",
			"path": null,
			"pid": 0,
			"children": [{
					"id": 6,
					"name": "库存查询",
					"path": "/stock",
					"pid": 5,
					"children": null
				},
				{
					"id": 7,
					"name": "入库管理",
					"path": "/in",
					"pid": 5,
					"children": null
				},
				{
					"id": 8,
					"name": "出库管理",
					"path": "/out",
					"pid": 5,
					"children": null
				}
			]
		}
	]
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = '123'

      // mock error
      if (!token) {
        return fail
      }

      return success(user)
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
