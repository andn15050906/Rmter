using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Remoter.Models
{
    public class Context : IdentityDbContext<AppUser>
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }
}
