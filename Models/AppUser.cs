using System;
using Microsoft.AspNetCore.Identity;

namespace Remoter.Models
{
    public class AppUser : IdentityUser
    {
        [PersonalData]
        public string AppUserId { get; set; }
        //Username
        [PersonalData]
        public string Avatar { get; set; }
        [PersonalData]
        public DateTime LastSeen { get; set; }
    }
}
