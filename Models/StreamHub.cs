using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Identity;

namespace Remoter.Models
{
    public class StreamHub : Hub
    {
        private readonly Context context;
        private readonly UserManager<AppUser> userManager;

        public StreamHub(Context context, UserManager<AppUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
            ConnectionHandler.ConnectedIds.Add(Context.ConnectionId);
            System.Diagnostics.Debug.WriteLine("DetectConnection");
            //Ask all if online
            //OnAsked, invoke online to all
            //await AskOnline();
        }





        public void ReceiveStream(string base64)
        {
            //should be web clients only
            Clients.Others.SendAsync("ReceiveStream", base64);
        }





        //should be server only
        public void SendLeftClick(int x, int y) => Clients.Others.SendAsync("LeftClick", x, y);
        public void SendRightClick(int x, int y) => Clients.Others.SendAsync("RightClick", x, y);
        public void SendMouseMove(int x, int y) => Clients.Others.SendAsync("MouseMove", x, y);










        /*public async Task AskOnline()
        {
            var userMail = await userManager.GetEmailAsync(await userManager.GetUserAsync(Context.User));
            await Clients.All.SendAsync("AskedOnline", userMail);
        }

        public async Task ShowOnline(string receiverEmail)
        {
            mailTask = userManager.GetEmailAsync(await userManager.GetUserAsync(Context.User));
            receiverTask = userManager.FindByEmailAsync(receiverEmail);
            await Clients.User((await receiverTask).Id).SendAsync("KnownOnline", await mailTask);
        }

        public async Task SendRoom(string room, string content)
        {
            //check if user is in room
            var userMail = await userManager.GetEmailAsync(await userManager.GetUserAsync(Context.User));
            await Clients.Group(room).SendAsync("ReceiveRoomMsg", userMail, content);
        }*/
    }

    public static class ConnectionHandler
    {
        public static List<string> ConnectedIds = new List<string>();
    }
}
