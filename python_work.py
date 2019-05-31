import hashlib
import hmac
import base64

school_id = '21774'
student_id = raw_input('enter your first and last name with no spaces: ')
message = bytes(school_id + student_id).encode('utf-8')
secret = bytes('6df48b3f350a2c188749fa6d49ad0bfd686d6edf').encode('utf-8')

hash = hmac.new(secret, message, hashlib.sha256)
print('https://education.github.com/student/verify?school_id=21774&student_id=' + student_id + '&signature=' + hash.hexdigest()) 